/* eslint-disable jsx-a11y/role-has-required-aria-props,jsx-a11y/aria-activedescendant-has-tabindex */
import React, { useEffect, useRef } from 'react';
import './DropDownItems.scss';
import { safeSelecor } from '../utils/element';
import { buildLoggers } from '../modules/Log';

const { log, error } = buildLoggers('DropDownItems');

const DropDownItems = ({
  id,
  open,
  items,
  noItemsMessage,
  multiple = false,
  highlightedId,
  // selectedItems = [],
  // disabledItems = [],
  onClick,
  onFocus,
  onBlur,
}) => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (!scrollContainer.current) return;
    let scrollTop = 0;

    // no sc
    if (highlightedId && highlightedId.length) {
      let highlightedElement;
      const selector = `#${highlightedId}`;
      try {
        highlightedElement = scrollContainer.current.querySelector(selector);
      } catch (err) {
        error({ selector }, err);
      }
      if (highlightedElement) {
        scrollTop = highlightedElement.offsetTop;
      }
    }
    //
    scrollContainer.current.scrollTop = scrollTop;
  }, [highlightedId, scrollContainer]);

  const _onBlur = (event) => {
    log('_onBlur()');
    if(onBlur) onBlur(event);
  };

  const _onFocus = (event) => {
    log('_onFocus()');
    if(onFocus) onFocus(event);
  };

  const onClickHandler = (event, option) => {
    log('onClickHandler()', {event, option});
    if (onClick) onClick(event, option);
    _onBlur(event);
  };

  if (!items || !items.length) return null;

  return (
    <div className="drop-down-items">
      <ul
        id={id}
        ref={scrollContainer}
        role="listbox"
        aria-hidden={open ? undefined : true}
        tabIndex={open ? '-1' : '0'}
        onBlur={_onBlur}
        onFocus={_onFocus}
        aria-activedescendant={highlightedId}
      >
        {
          items.map((item) => {
            const { text, value } = item;
            const itemId = DropDownItems.buildOptionId(id, item);
            const key = text;
            // const isSelected = highlightedId === itemId;
            // const isDisabled = disabledItems.includes(value);
            const isHighlighted = itemId === highlightedId;
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                id={itemId}
                key={key}
                role="option"
                aria-checked={isHighlighted ? true : undefined}
                aria-label={value}
                tabIndex={open && isHighlighted ? '0' : '-1'}
                onBlur={_onBlur}
                onFocus={_onFocus}
                onClick={(event) => onClickHandler(event, { id: itemId, multiple, text, value })}
                // aria-disabled={isDisabled ? true : undefined}
                // disabled={isDisabled ? true : undefined}
              >
                <span>{text}</span>
              </li>
            );
          })
        }
        {
          noItemsMessage && (!items || !items.length) && (
            <span>{noItemsMessage}</span>
          )
        }
      </ul>

    </div>
  );
};

DropDownItems.buildOptionId = (parentId, option) => safeSelecor(`${parentId}-${option && option.value}`);

export default DropDownItems;
