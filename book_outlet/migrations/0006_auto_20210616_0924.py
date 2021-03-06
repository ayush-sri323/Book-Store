# Generated by Django 3.2.4 on 2021-06-16 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_outlet', '0005_auto_20210615_1149'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('code', models.CharField(max_length=14)),
            ],
        ),
        migrations.AddField(
            model_name='book',
            name='city',
            field=models.ManyToManyField(to='book_outlet.Country'),
        ),
    ]
