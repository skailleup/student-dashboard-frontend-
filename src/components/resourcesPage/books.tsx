import { card } from "@/app/data";

export default function BooksContent() {
  return (
    <div className="grid grid-cols-5 gap-2">
      {card.map(({ image, alt }) => (
        <img key={alt} src={image} alt={alt} className="w-full h-full" />
      ))}
    </div>
  );
}
