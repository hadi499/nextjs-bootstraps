import Link from "next/link";
const DetailImage = () => {
  return (
    <div className="mx-auto mt-3 " style={{ width: "40rem", color: "#023e8a" }}>
      <h3 className="text-center mb-3">Detail Posting</h3>
      <img
        src="https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        className="card-img-top mb-2 rounded"
        height={300}
        alt="..."
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        magni cum tempore tenetur expedita, delectus ipsum ducimus temporibus
        placeat voluptatibus eius beatae repellat aspernatur minus provident
        quisquam! Eaque, tempora aperiam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        magni cum tempore tenetur expedita, delectus ipsum ducimus temporibus
        placeat voluptatibus eius beatae repellat aspernatur minus provident
        quisquam! Eaque, tempora aperiam.
      </p>
      <Link href="/">
        <button className="btn btn-outline-primary btn-sm "> Back</button>
      </Link>
    </div>
  );
};

export default DetailImage;
