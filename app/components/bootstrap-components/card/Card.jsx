export function Card({ children, className = "", style = {} }) {
  return (
    <div className={`card mb-3 ${className}`} style={style}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <>
      <div className={`card-header  ${className}`}>{children}</div>
    </>
  );
}
export function CardTitle({ children, className = "" }) {
  return (
    <>
      <h5 className={`card-title ${className}`}>{children}</h5>
    </>
  );
}
export function CardText({ children, className = "" }) {
  return (
    <>
      <p className={`card-text ${className}`}>{children}</p>
    </>
  );
}
export function CardBody({ children, className = "" }) {
  return (
    <>
      <div className={`card-body ${className}`}>{children}</div>
    </>
  );
}
export function CardDescription({ children, className = "" }) {
  return (
    <>
      <h6 className={`card-subtitle text-body-secondary ${className}`}>
        {children}
      </h6>
    </>
  );
}

export function CardImg({ src = "", className = "", style = {}, alt = "" }) {
  return <img src={src} className={className} style={style} alt={alt} />;
}

export function CardFooter({ children }) {
  return (
    <>
      <div className="card-footer">{children}</div>
    </>
  );
}

export function CardImgOverlay({
  children,
  className = "",
  src = "",
  alt = "",
  style = {},
}) {
  return (
    <>
      <Card>
        <CardImg
          src={src}
          className={`card-img ${className}`}
          alt={alt}
          style={style}
        />
        <div className={`card-img-overlay ${className}`}>{children}</div>
      </Card>
    </>
  );
}
