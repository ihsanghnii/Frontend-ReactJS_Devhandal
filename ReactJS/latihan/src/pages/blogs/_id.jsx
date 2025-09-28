// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePosts() {
  const post = useLoaderData();

  //   const params = useParams();
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  //       .then((response) => response.json())
  //       .then((json) => setPost(json));
  //   }, []); //arti array kosong ini adalah panggil sekali

  return (
    <>
      <h2>{post?.title}</h2>{" "}
      {/* kasih tanda tanya karena use effect ini bakal dijalankan setelah di render. kadang terjadi rest condisition, misalkan API blm resolve, kita blm mendapatkan data dari API nya, maka post disini bakalan masih string kosong, jadinya ga bisa ngambil titlenya karena masih kosong //// fungsi tanda tanya nya : ketika post masih kosong maka hiraukan, tapi kalau udah ada maka tampilkan titlenya  */}
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePosts;
