export default function ContainerFrame(props: any) {
  return (
    <div className="container-frame-1">
      <div className="container-frame-2">{props.children}</div>
    </div>
  );
}
