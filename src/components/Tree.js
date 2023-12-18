import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TreeView from 'react-treeview';

const Tree = () => {
    const data = useSelector(state => state.data);
    const [collapsed, setCollapsed] = useState({});

    const tree = {};
    data.forEach(item => {
        if (!tree[item.category]) {
            tree[item.category] = [];
        }
        tree[item.category].push(item);
    });

    const handleCollapse = (node) => {
        setCollapsed({ ...collapsed, [node]: !collapsed[node] });
    };

    return (
        <div className="treePage">
            {Object.keys(tree).map(category => (
                <div key={category} className="categoryFolder">
                    <button onClick={() => handleCollapse(category)}>
                        {collapsed[category] ? '+' : '-'}
                    </button>
                    <TreeView
                        nodeLabel={category}
                        collapsed={collapsed[category]}
                    >
                        {tree[category].map(item => (
                            <div className="categoryItem">
                                <TreeView
                                    key={item.image}
                                    nodeLabel={item.image}
                                />
                            </div>

                        ))}
                    </TreeView>
                </div>
            ))}
        </div>
    );
};

export default Tree;