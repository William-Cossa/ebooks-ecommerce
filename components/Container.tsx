interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="container mx-auto px-4 py-8 md:px-6 flex-grow">
      {children}
    </main>
  );
};

export default Container;
