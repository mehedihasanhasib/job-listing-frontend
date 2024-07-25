export default function Header({title}) {
  // console.log(style);
  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
             {title}
          </h1>
        </div>
      </div>
    </>
  );
}
