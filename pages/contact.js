function Contact() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 200px)",
        marginTop: "calc(56px + 60px)",
      }}
      className="container"
    >
      <h2 className="text-center">Have some question?</h2>
      <form style={{ maxWidth: "500px", margin: "auto" }}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="query">Query</label>
          <textarea name="query" id="query" className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
