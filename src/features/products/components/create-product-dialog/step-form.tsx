interface StepFormProps {
  onSubmit: () => void;
  children: React.ReactNode;
}

function StepForm({ onSubmit, children }: StepFormProps) {
  return (
    <form
      className="flex min-h-0 flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}

export default StepForm;
