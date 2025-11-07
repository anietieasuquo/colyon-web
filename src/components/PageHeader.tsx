interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
