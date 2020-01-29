#include<iostream>
#include<stack>
using namespace std ;

class node 
{
    public:
    int data ;
    node* next ;



    void insert(node** root , int d)
    {
        node* temp = new node ;
        temp->data = d ;
        temp->next = *root ;

        *root = temp ;
    }
      void display(node* head)
    {
        node* temp1 =head;
        cout<<"the list is \n";
        while(temp1!=NULL)
        {
            cout<<temp1->data<<" " ;
           // s1.push();
            temp1=temp1->next ;
        }
        cout<<"\n";
    }
    void reverse(node** head)
    {
        stack<node* > s ;
        node* temp3= *head ;

        while(temp3!=NULL)
        {
            s.push(temp3);
            temp3=temp3->next ;
        }

        node* temp4 =s.top();
        *head = temp4;
        s.pop();
 
        while(!s.empty())
        {       
            temp4->next =s.top() ;
            s.pop();
            temp4 =temp4->next ;
        }
        temp4->next = NULL ; 
    }

};

int main()
{
    int n,i,a;
    cout<<"enter the number of elements you wanna insert";
    cin>>n;
    node n1 ;
    node* head =NULL ;

    for(i=0;i<n;i++)
    {
        cout<<"element you want to insert \n";
        cin>>a ;
        n1.insert(&head , a);
        n1.display(head);
        cout<<"\n";
    }
    n1.reverse(&head);
    cout<<"\n";
    n1.display(head);


}

