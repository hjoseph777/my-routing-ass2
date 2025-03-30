interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-gray-800">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
