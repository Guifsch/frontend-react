import React, { useState, useEffect, useMemo } from "react";
import { getLastPosts } from "../api/post";
import Table from "../components/table";
import LoadingScreen from "react-loading-screen";
import Pagination from "best-react-pagination";

const LastPosts = () => {
  const [lastPosts, setLastPosts] = useState([]);
  const [pagePosts, setPagePosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLastPosts();
  }, [page]);

  const fetchLastPosts = async () => {
    try {
      setLoading(true);
      const valor = await getLastPosts(page);
      setLastPosts(valor);
      setPagePosts(valor.data.length);
      setPageTotal(valor.meta.pagination.pages);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Título",
        accessor: "title",
      },
      {
        Header: "Conteúdo",
        accessor: "body",
      },
    ],
    []
  );

  const dataUnformatted = [];

  for (var item in lastPosts.data) {
    dataUnformatted.push(lastPosts.data[item]);
  }

  const data = dataUnformatted;

  return (
    <div className="lastPosts">
      <p className="title">Últimas postagens</p>
      <Table columns={columns} data={data} />
      <div className="rowFooter">
        <p className="exibition">Exibindo {pagePosts} postagens</p>
        <Pagination
          paginationStart={1}
          currentIndex={page}
          setIndex={setPage}
          selectedItemClass={"selectedItem"}
          disableItemClass={"disableItemClass"}
          itemListClass={"itemListClass"}
          itemClass={"itemClass"}
          totalPages={pageTotal}
        />
      </div>
      <LoadingScreen
        loading={loading}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc=""
        children=""
        text=""
      ></LoadingScreen>
    </div>
  );
};

export default LastPosts;
