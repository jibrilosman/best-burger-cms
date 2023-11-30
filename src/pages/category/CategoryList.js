import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import ReactPaginate from "react-paginate";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    fetch(`http://localhost:5000/api/categories/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("category deleted", data);
        const UpdatedCategories = categories.filter(
          (category) => category._id !== id
        );
        setCategories(UpdatedCategories);
      });
  };

  const styles = {
    margin: "0 5px",
  };
  const displayItems = categories
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((category, i) => {
      return (
        <tr role="row" className="odd" key={category.i}>
          <td className="sorting_1">{category.name}</td>
          <td>
            <img
              src={`http://localhost:5000/images/${category.image}`}
              width="60px"
              height="60px"
            />
          </td>
          <td>{category.description}</td>
          <td>
            <Link
              className="btn btn-primary"
              style={styles}
              to={`/update/${category._id}`}
            >
              Edit
            </Link>
            <Link
              className="btn btn-danger"
              style={styles}
              onClick={() => handleDelete(category._id)}
            >
              Delete
            </Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(categories.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="content-wrapper">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNavigate}
              >
                Add Category
              </button>
            </div>
            <div className="card-body">
              <div
                id="example2_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6" />
                  <div className="col-sm-12 col-md-6" />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="example2"
                      className="table table-bordered table-hover dataTable text-center"
                      role="grid"
                      aria-describedby="example2_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="example2"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Rendering engine: activate to sort column descending"
                          >
                            Category Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example2"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Browser: activate to sort column ascending"
                          >
                            Image
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example2"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Platform(s): activate to sort column ascending"
                          >
                            Description
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example2"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Platform(s): activate to sort column ascending"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>{displayItems}</tbody>
                   
                    </table>
                  </div>
                </div>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationBtns"
                  previousLinkClassName="previousBtn"
                  nextLinkClassName="nextBtn"
                  disabledClassName="paginationDisabled"
                  activeClassName="paginationActive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
