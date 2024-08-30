const TopNav = () => {
  return (
    <div className={`p-3 bg-body-tertiary`}>
      <div className="row">
        <div className="col-6">
          <div className="navbar-brand text-capitalize">new blog</div>
        </div>
        <div className="col-6 d-none d-lg-block">
          <div className="d-flex justify-content-around">
            <div>home</div>
            <div>new</div>
            <div>trends</div>
            <div>catagories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
