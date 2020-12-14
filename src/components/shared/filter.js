import React, { useState } from "react";
import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayIcon from "@clayui/icon";
import ClayLabel from "@clayui/label";
import ClayManagementToolbar, {
  ClayResultsBar,
} from "@clayui/management-toolbar";
import spritemap from "../../assets/images/icons/icons.svg";

const Filter = ({ value, onChange }) => {
  const result = false;

  const filterItems = [
    { label: "Filter Action 1", onClick: () => alert("Filter clicked") },
    { label: "Filter Action 2", onClick: () => alert("Filter clicked") },
  ];

  const viewTypes = [
    {
      label: "List",
      onClick: () => alert("Show view list"),
      symbolLeft: "list",
    },
    {
      active: true,
      label: "Card",
      onClick: () => alert("Show view card"),
      symbolLeft: "cards2",
    },
  ];

  const [searchMobile, setSearchMobile] = useState(false);

  const viewTypeActive = viewTypes.find((type) => type.active);

  return (
    <>
      <ClayManagementToolbar>
        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item>
            <ClayCheckbox onChange={() => {}} />
          </ClayManagementToolbar.Item>

          <ClayDropDownWithItems
            items={filterItems}
            spritemap={spritemap}
            trigger={
              <ClayButton className="nav-link" displayType="unstyled">
                <span className="navbar-breakpoint-down-d-none">
                  <span className="navbar-text-truncate">{"Filter"}</span>

                  <ClayIcon
                    className="inline-item inline-item-after"
                    spritemap={spritemap}
                    symbol="caret-bottom"
                  />
                </span>
                <span className="navbar-breakpoint-d-none">
                  <ClayIcon spritemap={spritemap} symbol="filter" />
                </span>
              </ClayButton>
            }
          />
        </ClayManagementToolbar.ItemList>

        <ClayManagementToolbar.Search showMobile={searchMobile}>
          <ClayInput.Group>
            <ClayInput.GroupItem>
              <ClayInput
                aria-label="Search"
                className="form-control input-group-inset input-group-inset-after"
                defaultValue={value}
                type="text"
                onChange={(e) => onChange(e.currentTarget.value)}
              />
              <ClayInput.GroupInsetItem after tag="span">
                <ClayButtonWithIcon
                  className="navbar-breakpoint-d-none"
                  displayType="unstyled"
                  onClick={() => setSearchMobile(false)}
                  spritemap={spritemap}
                  symbol="times"
                />
                <ClayButtonWithIcon
                  displayType="unstyled"
                  spritemap={spritemap}
                  symbol="search"
                  type="submit"
                />
              </ClayInput.GroupInsetItem>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </ClayManagementToolbar.Search>

        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
            <ClayButton
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => setSearchMobile(true)}
            >
              <ClayIcon spritemap={spritemap} symbol="search" />
            </ClayButton>
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayDropDownWithItems
              items={viewTypes}
              spritemap={spritemap}
              trigger={
                <ClayButton
                  className="nav-link-monospaced nav-link"
                  displayType="unstyled"
                >
                  <ClayIcon
                    spritemap={spritemap}
                    symbol={viewTypeActive ? viewTypeActive.symbolLeft : ""}
                  />
                </ClayButton>
              }
            />
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButtonWithIcon
              className="nav-btn nav-btn-monospaced"
              spritemap={spritemap}
              symbol="plus"
            />
          </ClayManagementToolbar.Item>
        </ClayManagementToolbar.ItemList>
      </ClayManagementToolbar>

      {result && (
        <ClayResultsBar>
          <ClayResultsBar.Item>
            <span className="component-text text-truncate-inline">
              <span className="text-truncate">
                {'2 results for "'}
                <strong>{"Red"}</strong>
                {'"'}
              </span>
            </span>
          </ClayResultsBar.Item>
          <ClayResultsBar.Item expand>
            <ClayLabel
              className="component-label tbar-label"
              displayType="unstyled"
              spritemap={spritemap}
            >
              {"Filter"}
            </ClayLabel>
          </ClayResultsBar.Item>
          <ClayResultsBar.Item>
            <ClayButton
              className="component-link tbar-link"
              displayType="unstyled"
            >
              {"Clear"}
            </ClayButton>
          </ClayResultsBar.Item>
        </ClayResultsBar>
      )}
    </>
  );
};

export default Filter;
