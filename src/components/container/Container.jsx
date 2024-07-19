

function Container({ children }) {
  return (
    <div className=' mx-auto w-full px-5 md:px-10 lg:px-14 min-h-[90vh]'>
      {children}
    </div>
  );
}

export default Container;