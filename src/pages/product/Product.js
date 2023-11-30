import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [addon, setAddon] = useState({ name: "", price: 0 });
  const [addons, setAddons] = useState([]);

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    formData.append("file", file);
    formData.append("category", category);

    axios
      .post("http://localhost:5000/api/upload-files", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/productlist");
  };

  const handleAddAddon = () => {
    // Adding the current addon to the addons array
    setAddons([...addons, addon]);
    // Resetting the addon state for the next entry
    setAddon({ name: "", price: 0 });
  };

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Product</h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label>Product name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                  <label>Product Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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

                {/* addon fields */}

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
