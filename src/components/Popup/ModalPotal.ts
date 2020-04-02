import ReactDOM from 'react-dom';

const ModalPortal = (props: any) => {
  const el: any = document.getElementById('modal');
  return ReactDOM.createPortal(props.children, el);
};

export default ModalPortal;
