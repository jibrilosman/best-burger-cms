import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Category = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');


  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);

    axios.put('http://localhost:5000/api/upload-files', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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

            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label>Category name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
               
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                        name="file"
                        onChange={(e) => setFile(e.target.files[0])}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
