#include<iostream>
#include<cstdlib>
using namespace std ;

int main(){

    int n,m,i,j ;   // N is the number of rows and M is the bnumber of columns 
    cout<<"enter the value of n ";
    cin>>n;
    cout<<"enter the value of m";
    cin>>m;

    int a[n][m] , b[n][m] ,c[n][m] ,d[n][m];

    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            cout<<"enter the elements of the first array \n" ;
            cin>>a[i][j] ;
            cout<<"enter the elements of the second array \n" ;
            cin>>b[i][j] ;

            c[i][j] = a[i][j] + b[i][j] ;
            d[i][j] = a[j][i] * b[i][j] ;

            a[i][j] = abs(a[i][j] - b[i][j]) ;
        }
    }

cout<<"addition of the matrix is "<<"\n";
    
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            cout<<c[i][j]<<" ";
        }
        cout<<"\n";
    }
    cout<<"\n";

    cout<<"Subtraction of the matrix is \n";

    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            cout<<a[i][j]<<" ";
        }
        cout<<"\n";
    }
    cout<<"\n";
}