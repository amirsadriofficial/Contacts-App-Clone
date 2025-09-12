function ItemDetailContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white flex flex-col px-4 rounded-lg divide-y-[1px] divide-gray-300">
      {children}
    </div>
  );
}

export default ItemDetailContainer;
