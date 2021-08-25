<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <h3>Add Partner</h3>
        <form>
          <div class="form-group">
            <label>Company Name</label>
            <input
              class="form-control"
              type="text"
              v-model="partner.partner_name"
            />
          </div>
          <div class="form-group">
            <label>Country Name</label>
            <input
              class="form-control"
              type="text"
              v-model="partner.country_name"
            />
          </div>
          <div class="form-group">
            <label>Product List</label>
            <input
              class="form-control"
              type="text"
              v-model="partner.product_list"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              class="form-control"
              v-model="partner.description"
            ></textarea>
          </div>
          <div class="form-group my-4 upload">
            <label>Upload Image</label>
            <input class="form-control" type="file" @change="uploadImage" />
          </div>
          <div class="form-group">
            <div class="p-1">
              <img :src="partner.image" style="width: 80px; height: 50px" />
              <span class="delete-img" @click="deleteImage(image)">X</span>
            </div>
          </div>
          <div class="btn">
            <button class="btn btn-primary" @click.prevent="saveData">
              Add Partner
            </button>
          </div>
        </form>
      </div>

      <div class="col-md-12">
        <h3>Partner List</h3>
        <div class="table-responsive">
          <table class="table tavle-striped">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Country Name</th>
                <th>Product List</th>
                <th>Detail</th>
                <th>Image</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="partner in partners" :key="partner.id">
                <td>{{ partner.data().partner_name }}</td>
                <td>{{ partner.data().country_name }}</td>
                <td>{{ partner.data().product_list }}</td>
                <td>{{ partner.data().description }}</td>
                <td>{{ partner.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editPartner(partner)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deletePartner(partner.id)"
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
              <label>Company Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.partner_name"
              />
            </div>
            <div class="form-group">
              <label>Country Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.country_name"
              />
            </div>
            <div class="form-group">
              <label>Product List</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.product_list"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="partner.description"
              ></textarea>
            </div>
            <div class="form-group my-2 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="partner.image" style="width: 80px; height: 50px" />
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
              @click="updatePartner()"
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
  name: "partner",
  data() {
    return {
      showModal: false,
      partners: [],
      partner: {
        partner_name: "",
        country_name: "",
        product_list: "",
        description: "",
        image: "",
      },
      active_item: null,
    };
  },
  created() {
    db.collection("partners")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.partners.push(doc);
        });
      });
  },

  methods: {
    deleteImage() {},
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("partners/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.partner.image = downloadURL;
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
      db.collection("partners").onSnapshot((querySnapshot) => {
        this.partners = [];
        querySnapshot.forEach((doc) => {
          this.partners.push(doc);
        });
      });
    },

    updatePartner() {
      db.collection("partners")
        .doc(this.active_item)
        .update(this.partner)
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

    editPartner(partner) {
      this.showModal = true;
      this.partner = partner.data();
      this.active_item = partner.id;
    },

    deletePartner(doc) {
      if (confirm("Are you sure?")) {
        db.collection("partners")
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
      this.partner = {
        partner_name: "",
        country_name: "",
        product_list: "",
        description: "",
        image: null,
      };
    },

    saveData() {
      db.collection("partners")
        .add(this.partner)
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