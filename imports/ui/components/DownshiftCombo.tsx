import React, { useState } from "react";
import { useCombobox } from "downshift";

const menuStyles = {
    maxHeight: "180px",
    overflowY: "auto",
    width: "135px",
    margin: 0,
    borderTop: 0,
    background: "white",
    position: "absolute",
    zIndex: 1000,
    listStyle: "none",
    padding: 0,
    left: "135px"
};


const items = [
    "Neptunium",
    "Neptinam",
    "Neptiname",
    "Curium",
    "Currim",
    "Californium",
    "Einsteinium",
    "Currender",
    "Mendelevium",
    "Nobelium",
    "Lawrencium",
    "Rutherfordium",
    "Dubnium",
    "Seaborgium",
    "Hassiume",
    "Hassium",
    "Meitnerium",
    "Darmstadtium",
    "Roentgenium",
    "Copernicium",
    "Nihonium",
    "Flerovium",
    "Moscovium",
    "Livermorium",
    "Tennessine",
    "Oganesson"
];


// https://dev.to/aromanarguello/how-to-build-an-autocomplete-dropdown-in-react-using-downshift-1c3o
// https://www.merrickchristensen.com/articles/headless-user-interface-components/
function DropdownCombobox() {
    const [inputItems, setInputItems] = useState(items);
    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            setInputItems(
                items.filter(item =>
                    item.toLowerCase().startsWith(inputValue.toLowerCase())
                )
            );
        }
    });
    console.log(getToggleButtonProps());
    const triggerList = () => {
        getToggleButtonProps();
        // console.log(!isOpen);
        return !isOpen;
    };

    return (
        <>
            <label {...getLabelProps()}>Choose an element:</label>
            <div style={{ display: "inline-block" }} {...getComboboxProps()}>
                <input {...getInputProps()} onFocus={() => triggerList()} />
                <button {...getToggleButtonProps()} aria-label="toggle menu">
                    &#8595;--
        </button>
            </div>
            <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                    inputItems.map((item, index) => (
                        <li
                            style={
                                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default DropdownCombobox