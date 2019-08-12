class commonApi 
{
    static fetchUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .catch(function(error) {
                throw error;
            });
      }

      static fetchPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .catch(function(error) {
                throw error;
            });
      }

      static fetchPhotos() {
        return fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(response => response.json())
            .catch(function(error) {
                throw error;
            });
      }

}

export default commonApi;

