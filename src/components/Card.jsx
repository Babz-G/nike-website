export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} relative max-w-xl transform transition hover:scale-105 cursor-pointer p-1`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute left-[40%] h-40 w-56 top-[60px]"
        src={item.src}
        alt={item.title}
      />
    </div>
  );
}
