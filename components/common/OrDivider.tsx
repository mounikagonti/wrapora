const OrDivider = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-(--color-divider)" />

      <span className="text-sm text-(--color-text-secondary)">OR</span>

      <div className="h-px flex-1 bg-(--color-divider)" />
    </div>
  );
};

export default OrDivider;
