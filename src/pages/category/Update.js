import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/categories/${id}`)
      .then((res) => {
        console.log(res.data);
        setValues({
          name: res.data.name,
          description: res.data.description,
          image: res.data.file,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditCategory = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/categories/${id}`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/categorylist");
  };

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Category</h3>
            </div>
            <form onSubmit={handleEditCategory}>
              <div className="card-body">
                <div className="form-group">
                  <label>Category name</label>
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

export default Update;
