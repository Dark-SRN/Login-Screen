const SUPABASE_URL = 'https://obuxobtdtnwxbehhzxhq.supabase.co/rest/v1/';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idXhvYnRkdG53eGJlaGh6eGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzODk1OTcsImV4cCI6MjEwNzk2NTU5N30.ZBsvnPoChuYoPJOIBBdHdA1MIoQJ8lk__GP8952kX70';

export async function fetchUsers(user, pass) {
    const response = await fetch(`${SUPABASE_URL}rpc/verifyuser`, {
        method: 'POST',
        headers: {
            'apikey': ANON_KEY,
            'Authorization': `Bearer ${ANON_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputuser: user, inputpass: pass })
    });

    if (!response.ok) {
    console.error('Failed to fetch');
    return;
    }

    const data = await response.json();
    return data;
}
export async function postUserData(user, pass) {
    const response = await fetch(`${SUPABASE_URL}rpc/adduser`, {
        method: 'POST',
        headers: {
            'apikey': ANON_KEY,
            'Authorization': `Bearer ${ANON_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({newuser: user, newpass: pass})
    });

    if (!response.ok) {
    console.error('Failed to fetch');
    return;
    }
}