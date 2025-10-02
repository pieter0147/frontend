function ambilDataUser() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // ubah jadi JSON
    .then((data) => {
      data.forEach(({ username, email }) => {
        console.log(`Username: ${username}, Email: ${email}`);
      });
    })
    .catch((error) => {
      console.error("Terjadi error:", error);
    });
}

export default ambilDataUser;
