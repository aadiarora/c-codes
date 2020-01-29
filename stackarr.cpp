#include<iostream>
#include<stack>
using namespace std ;

int main()
{
    stack<int> s1 ;
    int n , i ;
    cout<<"enter the number of elements in array";
    cin>>n;
    int a[n];

    for(i=0;i<n;i++)
    {
        cin>>a[i];
        s1.push(a[i]);
    }
    while(!s1.empty())
    {
        cout<<s1.top()<<"  ";
        s1.pop();
    }
    
}
