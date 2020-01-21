/* eslint-disable react/jsx-props-no-spreading,react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import { objectFromPath } from '../utils/object';
import { buildLoggers } from '../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('connectGridHOC');

function gridHOC(Component) {
  const GridHelper = ({ model, update, updateAction, ...rest }) => {
    // FYI: can not pass functions previously wrapped in dispatch
    // FYI: kendo is using old react code base that makes this throw errors
    const dispatch = useDispatch();

    const getDataState = (nextDataState = {}) => {
      const dataState_current = objectFromPath(model, 'grid.dataState');
      return {
        ...dataState_current,
        ...nextDataState,
      };
    };

    const updateGridState = (dataState) => {
      // if (update) update(undefined, dataState);
      if (updateAction) dispatch(updateAction(undefined, dataState));
    };

    const getFilters = () => {
      const filters = [];
      const prependedFilters = objectFromPath(model, 'prependedFilters');
      const appendedFilters = objectFromPath(model, 'appendedFilters');
      if (prependedFilters) filters.push(...prependedFilters);
      const gridFilters = objectFromPath(model, 'grid.dataState.filter.filters');
      if (gridFilters) filters.push(...gridFilters);
      if (appendedFilters) filters.push(...appendedFilters);
      return filters;
    };

    const onDataStateChange = (event) => {
      const dataState = getDataState(event.data);
      updateGridState(dataState);
    };

    const onPageChange = (event) => {
      const dataState = getDataState(event.page);
      updateGridState(dataState);
    };

    const updateFromCellComponent = (componentProps, updateFunction) => {
      const data_all = model.data;
      const { dataItem = {} } = componentProps;
      const currentItem_index = dataItem.index;
      const data = data_all.map((item) => {
        const item_index = item.index;
        const isCurrent = currentItem_index === item_index;
        return updateFunction({ isCurrent, item });
      });
      dispatch(updateAction(data));
    };

    return (
      <Loader loading={model.loading}>
        <Component
          {...rest}
          grid={model.grid}
          update={update}
          updateFromCellComponent={updateFromCellComponent}
          getFilters={getFilters}
          onDataStateChange={onDataStateChange}
          onPageChange={onPageChange}
        />
      </Loader>
    );
  };

  return GridHelper;
}

export default gridHOC;
