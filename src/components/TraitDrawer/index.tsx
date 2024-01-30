import React, { useEffect, useState } from 'react';
import RectangleComponent from './RectangleComponent';
import Trait from '~/components/TraitDrawer/trait';
import TraitCategory from '~/components/TraitDrawer/trait-category';
import { useTraitTypesAndValues } from '~/hooks/useTraitTypesAndValues'; // Adjust the import path as needed

interface TraitDrawerProps {
  onTraitSelect: (traitType: string, value: string) => void;
}

const TraitDrawer: React.FC<TraitDrawerProps> = ({ onTraitSelect }) => {
  const { traitTypesAndValues } = useTraitTypesAndValues(); // Use the useTraitTypesAndValues hook
  const [collapsedCategories, setCollapsedCategories] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    // Initialize collapsed state for each category
    const initialCollapsedState = Object.keys(traitTypesAndValues).reduce<
      Record<string, boolean>
    >(
      (acc, traitType) => {
        acc[traitType] = true; // Initialize as true (collapsed)
        return acc;
      },
      {}, // Initial object
    );
    setCollapsedCategories(initialCollapsedState);
  }, [traitTypesAndValues]);

  const toggleCategory = (traitType: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [traitType]: !prev[traitType],
    }));
  };

  return (
    <RectangleComponent>
      <div className="overflow-auto h-full">
        {Object.entries(traitTypesAndValues).map(([traitType, values]) => (
          <div key={traitType}>
            <TraitCategory
              traitType={traitType}
              traitCount={values.length}
              onClick={() => toggleCategory(traitType)}
              collapsed={collapsedCategories[traitType] ?? false}
            />
            {!collapsedCategories[traitType] &&
              values.map((value) => (
                <Trait
                  key={value}
                  value={value}
                  onSelect={() => onTraitSelect(traitType, value)}
                />
              ))}
          </div>
        ))}
      </div>
    </RectangleComponent>
  );
};

export default TraitDrawer;
