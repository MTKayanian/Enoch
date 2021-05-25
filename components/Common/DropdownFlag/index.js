import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';



const Dropdown = ({ filters, defaultLabel }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setshow] = useState(false);
    const router = useRouter();



    return (
        <>
            {' '}
            <div
                class=""

            >
                <div
                    className={classnames(' ', {
                        ' ': showDropdown,
                    })}
                    onClick={() => {
                        setShowDropdown(true);
                        setshow(true);
                    }}
                >
                    {selectedTag ? selectedTag.label : defaultLabel}
                </div>

                <div
                    className={
                        show == true
                            ? 'dropdown-menu phn-dropdown-list show '
                            : 'dropdown-menu phn-dropdown-list  '
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="dropdown-menu phn-dropdown-list"> <div class="phn-list-bg"
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            > {filter.label}

                            </div></ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default Dropdown;
