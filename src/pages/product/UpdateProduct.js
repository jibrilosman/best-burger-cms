import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    id: id,
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setValues({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
          image: res.data.file,
          category: res.data.category,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditProduct = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/products/${id}`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/productlist");
  };

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Product</h3>
            </div>
            <form onSubmit={handleEditProduct}>
              <div className="card-body">
                <div className="form-group">
                  <label>Product name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter category name"
                    value={values.name}
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={values.description}
                    onChange={(e) =>
                      setValues({ ...values, description: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    value={values.category}
                    onChange={(e) =>
                      setValues({ ...values, category: e.target.value })
                    }
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={values.price}
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Add Image</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="form-control-file border"
                        placeholder="Choose file"
                        accept=".jpg, .png, .jpeg"
                        value={values.file}
                        onChange={(e) =>
                          setValues({ ...values, file: e.target.value })
                        }
                      />
                      <button type="button" className="btn btn-default btn-sm">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
