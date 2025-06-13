import React from 'react';

export function Tabs({ defaultValue, children, className = '' }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { value, onValueChange: setValue });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { value });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ value, onValueChange, children }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, {
            selected: child.props.value === value,
            onClick: () => onValueChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ children, selected, onClick, value }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5
        text-sm font-medium ring-offset-background transition-all
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${selected ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50'}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, selectedValue }) {
  if (value !== selectedValue) return null;
  return <div className="mt-2">{children}</div>;
} 