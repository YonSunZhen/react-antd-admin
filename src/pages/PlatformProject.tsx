import React, { useState, useEffect } from 'react';
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
          <span>点击</span>
        </a>
      ],
    },
  ]


  return (
    <ProTable
      headerTitle='Platform Project'
      search={{
        labelWidth: 120,
      }}
      // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
      columns={columns}
    />
  );
}

export default PlatformProject;
