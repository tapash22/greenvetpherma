<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <h3>Gallery Picture</h3>
        <form>
          <div class="form-group">
            <label>Occation Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Event Name .."
              v-model="gallery.occation_name"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              class="form-control"
              v-model="gallery.description"
            ></textarea>
          </div>
          <div class="form-group my-4 upload">
            <label>Upload Image</label>
            <input class="form-control" type="file" @change="uploadImage" />
          </div>
          <div class="form-group">
            <div class="p-1">
              <img :src="gallery.image" style="width: 80px; height: 50px" />
            </div>
          </div>
          <div class="btn">
            <button class="btn btn-primary" @click.prevent="saveData">
              Add Gallary
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
                <th>Event name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="gallery in gallerys" :key="gallery.id">
                <td>{{ gallery.data().occation_name }}</td>
                <td>{{ gallery.data().description }}</td>
                <td>{{ gallery.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editGallery(gallery)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteGallery(gallery.id)"
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
              <label>Event Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="gallery.occation_name"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="gallery.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="gallery.image" style="width: 80px; height: 50px" />
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
              @click="updateGallery()"
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
  name: "Gallery",
  data() {
    return {
      showModal: false,
      gallerys: [],
      gallery: {
        occation_name: "",
        description: "",
        image: "",
      },
      active_item: null,
    };
  },
  created() {
    db.collection("gallerys")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.gallerys.push(doc);
        });
      });
  },

  methods: {
    deleteImage() {},

    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("gallerys/" + file.name);
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
              this.gallery.image = downloadURL;
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
      db.collection("gallerys").onSnapshot((querySnapshot) => {
        this.gallerys = [];
        querySnapshot.forEach((doc) => {
          this.gallerys.push(doc);
        });
      });
    },

    updateGallery() {
      db.collection("gallerys")
        .doc(this.active_item)
        .update(this.gallery)
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

    editGallery(gallery) {
      this.showModal = true;
      this.gallery = gallery.data();
      this.active_item = gallery.id;
    },

    deleteGallery(doc) {
      if (confirm("Are you sure?")) {
        db.collection("gallerys")
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

    // readData() {
    //   db.collection("gallerys")
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         this.gallerys.push(doc);
    //       });
    //     });
    // },
    reset() {
      this.gallery = {
        occation_name: "",
        description: "",
        image: "",
      };
    },

    saveData() {
      db.collection("gallerys")
        .add(this.gallery)
        .then((docRef) => {
          this.reset();
          // this.readData();
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