import NotFoundImage from "@/assets/404.webp";

function NotFound() {
  return (
    <div className="flex h-full items-center justify-end">
      <img src={NotFoundImage} />
    </div>
  );
}

export default NotFound;
