# Generated by Django 4.2.4 on 2023-08-31 02:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cnexample',
            old_name='example_numbering',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='cnmeaning',
            old_name='meaning_numbering',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='jpexample',
            old_name='example_numbering',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='jpmeaning',
            old_name='meaning_numbering',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='krexample',
            old_name='example_numbering',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='krmeaning',
            old_name='meaning_numbering',
            new_name='order',
        ),
    ]