<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <h3>Upload product</h3>
        <form>
          <div class="form-group">
            <label>Product Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="product.product_title"
            />
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="product.link"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              class="form-control"
              v-model="product.descripsion"
            ></textarea>
          </div>
          <div class="form-group my-4 upload">
            <label>Upload Pdf</label>
            <input class="form-control" type="file" @change="uploadPdf" />
          </div>
          <div class="form-group my-4 upload">
            <label>Upload Image</label>
            <input class="form-control" type="file" @change="uploadImage" />
          </div>
          <div class="form-group">
            <div class="p-1">
              <img :src="product.image" style="width: 80px; height: 50px" />
            </div>
          </div>
          <div class="btn">
            <button class="btn btn-primary" @click.prevent="saveData">
              Add Product
            </button>
          </div>
        </form>
      </div>

      <div class="col-md-12">
        <h3>Product List</h3>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Company Link</th>
                <th>Description</th>
                <th>Pdf</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.data().product_title }}</td>
                <td>{{ product.data().link }}</td>
                <td>{{ product.data().descripsion }}</td>
                <td>{{ product.data().pdf }}</td>
                <td>{{ product.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editProduct(product)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(product.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Update Product</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Product Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="product.product_title"
              />
            </div>
            <div class="form-group">
              <label>Company Link</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="product.link"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="product.descripsion"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Pdf</label>
              <input type="file" @change="uploadPdf" />
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="product.image" style="width: 80px; height: 50px" />
                <span class="delete-img" @click="deleteImage(image)">X</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct()"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../../firebase";
export default {
  name: "product",
  data() {
    return {
      showModal: false,
      products: [],
      product: {
        product_title: "",
        link: "",
        descripsion: "",
        pdf: "",
        image: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc);
        });
      });
  },

  methods: {
    deleteImage() {},
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("products/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.image = downloadURL;
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },

    inClose() {
      this.showModal = false;
    },

    watcher() {
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
    },

    updateProduct() {
      db.collection("products")
        .doc(this.active_item)
        .update(this.product)
        .then(() => {
          this.showModal = false;
          this.watcher();
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },

    editProduct(product) {
      this.showModal = true;
      this.product = product.data();
      this.active_item = product.id;
    },

    deleteProduct(doc) {
      if (confirm("Are you sure?")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(() => {
            this.watcher();
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    },

    reset() {
      this.product = {
        product_name: "",
        company_name: "",
        pet_name: "",
        description: "",
        image: "",
      };
    },

    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          this.reset();
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
}
.row {
  display: flex;
  flex-direction: column;
}
.col-md-12 {
  padding: 10px;
}
form {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  padding: 20px;
}
form label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: left;
  padding: 20px;
}
.col-md-12 h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding: 10px;
}
.modal {
  display: block;
}
</style>