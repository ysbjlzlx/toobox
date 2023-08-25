'use client';

import { Tabs } from 'antd';
import _ from 'lodash';
import { Tab } from 'rc-tabs/lib/interface';
import * as React from 'react';
import { useEffect, useState } from 'react';

import useJsonTabStore from '@/stores/JsonTabStore';
import { PageContainer } from '@ant-design/pro-components';
import dynamic from 'next/dynamic';

const JsonEditor = dynamic(() => import('./JsonEditor'), { ssr: false });

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
const Page = () => {
  const { jsonTabs, activeKey, addJsonTab, removeJsonTab, setActiveKey } = useJsonTabStore();
  const [items, setItems] = useState<Tab[]>([]);

  useEffect(() => {
    const item: Tab[] = jsonTabs.map((idx, i) => {
      return {
        key: idx,
        label: 'JSON Editor - ' + idx,
        closable: true,
        children: <JsonEditor idx={idx} />,
        style: {
          height: `calc(100vh - 56px)`,
        },
      };
    });
    if (_.indexOf(jsonTabs, activeKey) === -1) {
      const lastItem = _.last(item);
      setActiveKey(lastItem?.key || '0');
    }

    setItems(item);
  }, [jsonTabs, activeKey, setActiveKey]);

  const onChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };
  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const add = () => {
    let newActiveKey = '0';
    if (jsonTabs && jsonTabs.length > 0) {
      const keys = jsonTabs.map((i) => {
        return Number(i);
      });
      const maxKey = Math.max(...keys);

      newActiveKey = `${maxKey + 1}`;
    }
    addJsonTab(newActiveKey);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    removeJsonTab(String(targetKey));
    localStorage.removeItem(`json-${targetKey}`);
    if (jsonTabs && jsonTabs.length <= 1) {
      addJsonTab('0');
    }
  };

  return (
    <PageContainer title={false}>
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        style={{ height: '80vh' }}
      />
    </PageContainer>
  );
};

export default Page;
