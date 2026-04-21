const TerminalIcon = (props) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path 
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM7.41 10.59L8.83 9.17l2.5 2.5-2.5 2.5-1.42-1.42L9.17 12l-1.76-1.41z"
      />
    </svg>
  );
};

export default TerminalIcon;
