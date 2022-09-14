import ComposeModal from './ComposeModal'
const PageLayout = ({ children }) => {
  return (
    <div>
      <div >
        {children}
      </div>
      <ComposeModal/>
    </div>
  );
};

export default PageLayout;
