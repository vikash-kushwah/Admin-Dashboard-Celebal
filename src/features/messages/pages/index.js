import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Table } from '../../../components/ui/table';
import { Avatar } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { messages } from '../../../data/dummy-data';

export default function Messages() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table
            data={messages}
            columns={[
              {
                header: 'From',
                cell: (row) => (
                  <div className="flex items-center gap-2">
                    <Avatar src={row.from.avatar} name={row.from.name} />
                    <div>
                      <div className="font-medium">{row.from.name}</div>
                      <div className="text-sm text-muted-foreground">{row.from.email}</div>
                    </div>
                  </div>
                )
              },
              {
                header: 'Subject',
                cell: (row) => (
                  <div>
                    <div className="font-medium">{row.subject}</div>
                    <div className="text-sm text-muted-foreground truncate">{row.content}</div>
                  </div>
                )
              },
              {
                header: 'Status',
                cell: (row) => (
                  <Badge variant={row.read ? 'secondary' : 'default'}>
                    {row.read ? 'Read' : 'Unread'}
                  </Badge>
                )
              }
            ]}
            onRowClick={(row) => setSelectedMessage(row)}
          />
        </CardContent>
      </Card>

      {selectedMessage && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar src={selectedMessage.from.avatar} name={selectedMessage.from.name} />
              <div>
                <CardTitle>{selectedMessage.from.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{selectedMessage.from.email}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose dark:prose-invert">
                <p>{selectedMessage.content}</p>
              </div>
              {selectedMessage.attachments?.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Attachments</h4>
                  <div className="grid gap-2">
                    {selectedMessage.attachments.map((attachment) => (
                      <div key={attachment.name} className="flex items-center gap-2 text-sm">
                        <span>{attachment.name}</span>
                        <span className="text-muted-foreground">({attachment.size})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
