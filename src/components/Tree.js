import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TreeView from 'react-treeview';

const Tree = () => {
    const data = useSelector(state => state.data);
    const categories = Array.from(new Set(data.map(item => item.category)));
    const [collapsed, setCollapsed] = useState(Object.fromEntries(categories.map(category => [category, true])));

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
        <div className="tree-page">
            {Object.keys(tree).map(category => (
                <div key={category} className="tree-page__category-folder">
                    <button onClick={() => handleCollapse(category)}>
                        {collapsed[category] ? '+' : '-'}
                    </button>
                    <TreeView
                        nodeLabel={category}
                        collapsed={collapsed[category]}
                    >
                        {tree[category].map(item => (
                            <div className="tree-page__category-item">
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