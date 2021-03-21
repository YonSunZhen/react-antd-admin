import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { getTestData, TestResponse } from '../services';

function PlatformProject() {

  useEffect(() => {
    const fetchData = async() => {
      const res = await getTestData();
      console.log('debug9');
      console.log(res);
    }
    // TODO: 疑问 fetchData(...)不能阻塞?
    fetchData();
  }, [])

  const columns: ProColumns<TestResponse>[] = [
    {
      title: 'Platform',
      dataIndex: 'platform_id',
      tip: '规则名称是唯一的 key',
      valueType: 'text'
    },
    {
      title: 'Project Name',
      dataIndex: 'project_name',
      valueType: 'text'
    },
    {
      title: 'Project Url',
      dataIndex: 'project_url',
      valueType: 'text'
    },
    {
      title: 'Revision',
      dataIndex: 'revision',
      valueType: 'text'
    },
    {
      title: <span>操作</span>,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
           
          }}
        >
          <span>查看分支</span>
        </a>
      ],
    },
  ]


  return (
    <ProTable
      style = {{
        height: '100%',
        overflowY: 'auto',
        backgroundColor: 'white'
      }}
      // headerTitle='Platform Project'
      rowKey="project_url"
      search={{
        labelWidth: 120,
      }}
      request={(params, sorter, filter) => getTestData({ ...params, sorter, filter })}
      columns={columns}
    />
  );
}

export default PlatformProject;
