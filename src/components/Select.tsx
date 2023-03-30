import { FC, useEffect, useRef, useState } from 'react';
import './Select.css';

export type SelectOption = {
  label: string;
  value: string | number;
  id?: string | number;
  avatar?: string;
};

type MultipleSelectProps = {
  multiple: true;
  avatars?: boolean | undefined;
  divider?: boolean | undefined;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  avatars?: boolean | undefined;
  divider?: boolean | undefined;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
  className?: string;
} & (SingleSelectProps | MultipleSelectProps);

const Select: FC<SelectProps> = ({
  multiple,
  value,
  onChange,
  options,
  avatars,
  divider,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple === true) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.addEventListener('keydown', handler);

    return () => {
      container.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={`container ${className}`}>
      <span className='value'>
        {multiple
          ? value.map((v) => (
            <button
              key={v.id ? v.id : v.value}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(v);
              }}
              className='option-badge'>
              {avatars && v.avatar && (
                <img
                  src={v.avatar}
                  alt={`${v.label} avatar`}
                  className='badge-avatar'
                />
              )}
              {v.label}
              <span className='remove-btn'>&times;</span>
            </button>
          ))
          : (value as SelectOption)?.label}
      </span>
      {/* <button
        type='button'
        className='clear-btn'
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}>
        &times;
      </button> */}
      {divider && <div className='divider'></div>}
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='caret'>
        <path d="M1.66406 1.5L6.9974 6.83333L12.3307 1.5" stroke="#222222" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round" className='caret-path' />
      </svg>

      <ul className={`options ${isOpen ? 'show' : ''}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`option 
     ${isOptionSelected(option) ? 'selected' : ''} ${index === highlightedIndex ? 'highlighted' : ''
              }`}>
            {avatars && option.avatar && (
              <img
                src={option.avatar}
                alt={`${option.label} avatar`}
                className='avatar'
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
            )}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Select };
