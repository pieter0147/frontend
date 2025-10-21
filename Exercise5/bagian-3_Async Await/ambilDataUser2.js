async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach(({ name }) => {
      console.log(`Nama Lengkap: ${name}`);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}
export default ambilDataUser;