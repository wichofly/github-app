interface Prop {
  alert: { msg: string; type: string } | null;
}

const Alert = ({ alert }: Prop) => {
  return (
    alert !== null && (
      <div
        role="alert"
        className={`alert alert-${alert.type} mb-4 space-x-2 bg-red-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 flex-none mt-0-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>:
          <path stroke="#B91C1C" strokeWidth="2" d="M8 8l8 8M16 8l-8 8" />
        </svg>
        <p className="flex-1 text-base leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
};

export default Alert;
